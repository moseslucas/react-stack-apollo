import STORE_QUERIES from './queries'

const resolvers = {
  Mutation: {
    updateNightMode: (_, args, { cache }) => {
      const query = STORE_QUERIES.nightMode
      // const prev = cache.readQuery({ query })
      const data = {
        nightMode: args.nightMode
      }
      cache.writeQuery({ query, data })
      return data
    }
  }
}

export default resolvers
