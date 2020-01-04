import {prismaObjectType, prismaExtendType} from 'nexus-prisma'
import {intArg} from 'nexus'

const Country = prismaObjectType({
    name: 'Country',
    definition(t) {
        t.prismaFields({filter: ['createdAt', 'updatedAt']})
    }
})

export const FiveStar = prismaExtendType({
    type: 'Query',
    definition(t) {
       t.field('fiveStar', {
        ...t.prismaType.landmarks,
        args: {
            rating: intArg({
                default: 5,
                description: 'Rating of the location',
                nullable: true,
            })
        },
        resolve(parent, {rating}, ctx) {
            return ctx.prisma.landmarks({where: {rating: rating}})
        }
       })
    }
})

export default Country;
