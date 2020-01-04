import {prismaObjectType} from 'nexus-prisma'

const Mutation = prismaObjectType({
    name: 'Mutation',
    definition(t) {
        t.prismaFields(['deleteCountry'])
    }
})

export default Mutation;