
export type AllCourses = {
  courses: [Course]
}

export type Course = {
  id: number,
  title: string,
  instructor: Instructor,
  description: string,
  duration: string,
  level: string
  numStudents: number,
  price: number,
  rating: number,
  tags: [Tag]
}

export type Instructor = {
  name: string,
  email: string
}

export type Tag = {
  name: string,
  description: string
}
