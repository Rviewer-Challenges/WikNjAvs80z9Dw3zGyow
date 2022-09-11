import { useState } from 'react';
import { FaPlus} from 'react-icons/fa';

import { types, attendence_type, speciality_type } from '@/utils/types';
import * as firebase from '@database'
import { handleCreateErrors } from '@/utils/errors'

import Dialogue from '@/components/Dialogue'
import Select from '@/components//Select/'
import Input from '@/components//Input'
import { CenterContent, Form, Label, Button, Column, TopButtons, TopButton, Separator, Textarea, Error} from '@/assets/style'
import { AddButton, PorfileImage, ImageInput } from './styles'
import toast from 'react-hot-toast';


export default function AddForm() {
  const [show, setShow] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [specialityType, setSpecialityType] = useState('');
  const [attendenceType, setAttendenceType] = useState('');
  const [educatorId, setEducatorId] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [typeOfDocument, setTypeOfDocument] = useState("courses");
  const [educators, setEducators] = useState([]);
  const [eds, setEds] = useState([]);
  const [errors, setErrors] = useState({})

  const setDocument = {
    name: setName,
    type: setType,
    educator: setEducatorId,
    speciality_type: setSpecialityType,
    attendence_type: setAttendenceType,
    description: setDescription,
    link: setLink,
    price: setPrice,
    previewImage: setPreviewImage,
    profileImage: setProfileImage
  }

  async function getEducators() {
    let ed = await firebase.get({
      database: 'educators',
      order:{
        by: 'name'
      }
    });

    setEds(ed)

    ed = ed.map(({name, id}) => ({text: name, value: id}))

    setEducators(ed)
    
  }

  function setEducator () {
    setTypeOfDocument("educators")
    setErrors({})
  }

  function setCourse () {
    getEducators()
    setTypeOfDocument("courses")
    setErrors({})
  }

  function handleSubmitImage (e) {
    e.preventDefault();
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setProfileImage(e.target.files[0]);
  }

  function openModal () {
    if(typeOfDocument === "courses") {
      getEducators()
    }

    setShow(true)
  }

  async function handleSubmit (e) {
    e.preventDefault()

    let data = {}

    data.name = name;
    data.type = type;
    data.description = description;
    data.link = link;

    if (typeOfDocument === 'courses') {
      data.speciality_type = specialityType;
      data.attendence_type = attendenceType;
      data.educator = eds.find(({id}) => id === educatorId);
      data.price = price;
    }

    const { ok, err } = handleCreateErrors(data)

    if (ok && typeOfDocument === 'educators' && profileImage) {
      const imgName = name + new Date().getTime()
      const result = await firebase.upload({file: profileImage, name: imgName})
      if (result.ok) {
        data.image = result.url
      } else {
        toast('Algo ha fallado al subir la imagen')
      }

    } else if (ok) {
      err.image = 'Este campo es requerido!'
    }

    data.average_rating = 0;
    data.total_ratings = 0;
    data.created_at = new Date().getTime();

    if (ok) {
     const result = await firebase.add({database: typeOfDocument, data})
     if (result.ok) {
      toast('Gracias por la información!');
      setShow(false);
      clearDocument();
    } else {
      toast('Algo ha fallado al subir la información');
    }
    }

    setErrors(err)
  }

  function handleChange (e) {
    const name = e.target.id
    const value = e.target.value
    setDocument[name](value)
  }

  function clearDocument () {
    for (const key in setDocument) {
      setDocument[key]('')
    }
  }
  return (
      <>
        <AddButton className="add_button" type="button" onClick={openModal}>
          <FaPlus/>
        </AddButton>
        <Dialogue show={show} close={() => setShow(false)}>
          <TopButtons>
            <TopButton 
              type="button"
              onClick={setCourse} 
              selected={typeOfDocument === "courses"}
            >
              Curso
            </TopButton>
            <Separator />
            <TopButton 
              type="button"
              onClick={setEducator} 
              selected={typeOfDocument === "educators"}
            >
              Educador
            </TopButton>
          </TopButtons>
          <Form onSubmit={handleSubmit}>
            <Column>
              {
                typeOfDocument === 'educators' && <>
                  <label htmlFor="porfileImage">
                    <CenterContent>
                      <PorfileImage
                        src={
                          previewImage ||
                          "https://usra-quantum.s3.amazonaws.com/assets/images/user-avatar-icon.png"
                        }
                        error={errors.image}
                      />
                      <Error display={errors.image} >{errors.image}</Error>
                    </CenterContent>
                  </label>
                  <ImageInput
                    type="file"
                    id="porfileImage"
                    name="porfileImage"
                    accept="image/png, image/jpeg"
                    onChange={handleSubmitImage}
                  />
                </>
              }
              <Input 
                type="text"
                placeholder="Nombre"
                id="name"
                onChange={handleChange}
                error={errors.name}
                label="Nombre:"
                value={name}
              />
              <Input
                type="url"
                placeholder="Link"
                id="link"
                value={link}
                onChange={handleChange}
                error={errors.link}
                label="Link:"
              />
              <Label htmlFor="description">Descripción:</Label>
              <Textarea
                placeholder="Descripción"
                id="description"
                rows="4"
                onChange={handleChange}
                error={errors.description}
                value={description}
              />
              <Error display={errors.description} >{errors.description}</Error>
              <Select
                name="type"
                id="type"
                options={types[typeOfDocument]}
                label="Tipo:"
                onChange={handleChange}
                error={errors.type}
                value={type}
                />
              {
                typeOfDocument === 'courses' &&
                  <>
                    <Select
                      name="speciality_type"
                      id="speciality_type"
                      options={speciality_type}
                      label="Especialidad:"
                      onChange={handleChange}
                      error={errors.speciality_type}
                      value={specialityType}
                    />
                    <Select
                      name="attendence_type"
                      id="attendence_type"
                      options={attendence_type}
                      label="Presencialidad:"
                      onChange={handleChange}
                      error={errors.attendence_type}
                      value={attendenceType}
                    />

                    <Select
                      name="educator"
                      id="educator"
                      options={educators}
                      label="Educador:"
                      onChange={handleChange}
                      error={errors.educator}
                      value={educatorId}
                    />
                    <Input
                      type="number"
                      placeholder="Precio en € (solo valor)"
                      id="price"
                      onChange={handleChange}
                      error={errors.price}
                      label="Precio:"
                      value={price}
                    />
                  </>
              }
              <Button type="submit">Guardar</Button>
            </Column>
          </Form>
        </Dialogue>
      </>
  );
}