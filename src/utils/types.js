const types = {
  educators: [
    {
      text: 'Universidad',
      value: 'university'
    },
    {
      text: 'Escuela',
      value: 'school'
    },
    {
      text: 'Bootcamp',
      value: 'bootcamp'
    },
    {
      text: 'Youtuber / Streamer',
      value: 'youtuber'
    },
    {
      text: 'Plataforma educativa',
      value: 'educational-platform'
    }
  ],
  courses: [
    {
      text: 'Grado',
      value: 'degree'
    },
    {
      text: 'Master',
      value: 'master'
    },
    {
      text: 'Bootcamp',
      value: 'bootcamp'
    },
    {
      text: 'Curso',
      value: 'course'
    }
  ]
}

const attendence_type = [
  {
    text: 'Online',
    value: 'online'
  },
  {
    text: 'Presencial',
    value: 'in_person'
  },
  {
    text: 'Híbrido',
    value: 'hybrid'
  }
]

const speciality_type = [
  {
    text: 'Frontend',
    value: 'frontend'
  },
  {
    text: 'Backend',
    value: 'backend'
  },
  {
    text: 'Fullstack',
    value: 'fullstack'
  },
  {
    text: 'Mobile',
    value: 'mobile'
  },
  {
    text: 'Data Science',
    value: 'data_science'
  },
  {
    text: 'Machine Learning',
    value: 'machine_learning'
  },
  {
    text: 'Videojuegos',
    value: 'videogames'
  },
  {
    text: 'Ciberseguridad',
    value: 'cybersecurity'
  },
  {
    text: 'UX/UI',
    value: 'ux_ui'
  }
]


const sort_types = [
  {
    text: 'Puntuación',
    value: 'average_rating'
  },
  {
    text: 'Numero de puntuaciones',
    value: 'total_ratings'
  },
  {
    text: 'Creación',
    value: 'created_at'
  },
]

function transformTypesToObject(types) {
  const typesObject = {};
  types.forEach(({text, value}) => {typesObject[value] = text})
  return typesObject;
}

export { types, attendence_type, speciality_type, sort_types, transformTypesToObject }