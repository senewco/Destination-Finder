import {prismaObjectType} from 'nexus-prisma'

const Landmark = prismaObjectType({
    name: 'Landmark',
    definition(t) {
        t.prismaFields({filter: ['createdAt', 'updatedAt']})
        t.field('LocationString', {
            type: 'String'!,
            resolve({name, city_name}) {
                return `${name} is in ${city_name}`
            }
        })
    }
})
    
export default Landmark;