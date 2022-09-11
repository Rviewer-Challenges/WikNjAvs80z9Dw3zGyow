import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import AddForm from '@/components/AddForm';
import Course from '@/components/Course';
import Educator from '@/components/Educator';
import { get } from '@database'

import { useDispatch } from 'react-redux'
import { set, setListShown} from '@/redux/reducer'

import { EducatorsList } from './styles'

export default function List() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {courses, educators, listShown} = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    if(listShown === '') {
      getItems()
    }
  },[])

  async function getItems () {
    const list = await get({sort: {by:'created_at', type: 'desc'}, database: 'courses'});
    dispatch(set({data: list, type: 'courses'}));
    dispatch(setListShown('courses'));
  }

  return (
    <>
      { listShown === "courses" && <div className="list">
        { courses.map(course => 
            <Course key={course.id} info={course} />
        ) }
      </div>
      }

      { listShown === "educators" && <EducatorsList className="list">
        { educators.map((educator) => <Educator key={educator.id} educator={educator} />) }
      </EducatorsList>
      }

      <AddForm />
    </>
  );
}