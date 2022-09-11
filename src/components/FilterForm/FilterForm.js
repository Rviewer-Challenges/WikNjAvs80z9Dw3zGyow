import { useState, useEffect } from 'react';

import { types, attendence_type, speciality_type, sort_types } from '@/utils/types';
import { get } from '@database'

import Dialogue from '@/components/Dialogue'
import Select from '@/components//Select/'
import { Form, Button, Column, TopButtons, TopButton, Separator } from '@/assets/style'
import { FreeButton } from './styles'

import { useDispatch } from 'react-redux'
import { set, setListShown } from '@/redux/reducer'


export default function AddForm({show, close}) {
  const [specialityType, setSpecialityType] = useState('');
  const [attendenceType, setAttendenceType] = useState('');
  const [type, setType] = useState('');
  const [sort, setSort] = useState('');
  const [typeOfDocument, setTypeOfDocument] = useState("courses");
  const [free, setFree] = useState(false)

  const dispatch = useDispatch()


  useEffect(() => {
    clearDocument()
  // eslint-disable-next-line
  }, [typeOfDocument]);

  const setDocument = {
    type: setType,
    speciality_type: setSpecialityType,
    attendence_type: setAttendenceType,
    sort: setSort
  }

  function setEducator () {
    setTypeOfDocument("educators")
  }

  function setCourse () {
    setTypeOfDocument("courses")
  }

  async function handleSubmit (e) {
    e.preventDefault()

    let data = {}

    data.type = type;
    data.sort = {
      by: sort,
      type: 'desc'
    };

    if (typeOfDocument === 'courses') {
      data.speciality_type = specialityType;
      data.attendence_type = attendenceType;
      data.price = free ? '0' : '';
    }

    const list = await get({...data, database: typeOfDocument});

    dispatch(set({data: list, type: typeOfDocument}));
    dispatch(setListShown(typeOfDocument));
    close();
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
        <Dialogue show={show} close={close}>
          <TopButtons>
            <TopButton
              type="button"
              onClick={setCourse}
              selected={typeOfDocument === "courses"}
            >
              Cursos
            </TopButton>
            <Separator />
            <TopButton
              type="button"
              onClick={setEducator}
              selected={typeOfDocument === "educators"}
            >
              Educadores
            </TopButton>
          </TopButtons>
          <Form onSubmit={handleSubmit}>
            <Column>
              <Select
                name="sort"
                id="sort"
                options={sort_types}
                label="Ordenar por:"
                onChange={handleChange}
                value={sort}
              />
              <Select
                name="type"
                id="type"
                options={types[typeOfDocument]}
                label="Tipo:"
                onChange={handleChange}
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
                      value={specialityType}
                    />
                    <Select
                      name="attendence_type"
                      id="attendence_type"
                      options={attendence_type}
                      label="Presencialidad:"
                      onChange={handleChange}
                      value={attendenceType}
                    />
                    <FreeButton
                      type="button"
                      active={free}
                      onClick={() => setFree(!free)}
                    >Gratis</FreeButton>
                  </>
              }
              <Button type="submit">Buscar</Button>
            </Column>
          </Form>
        </Dialogue>
      </>
  );
}