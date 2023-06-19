import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const updateCategories = ({ id, input }) => {
  return db.user.update({
    data: {
      general: input.general,
      business: input.business,
      entertainment: input.entertainment,
      health: input.health,
      science: input.science,
      sports: input.sports,
      technology: input.technology,
    },
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
