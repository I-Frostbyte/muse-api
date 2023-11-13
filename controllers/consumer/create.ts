import { createOne } from "../../lib/helper";
import  Consumer from "../../models/Consumer"

const createConsumer = createOne(Consumer, [
    'firstName',
    'lastName',
    'username',
    'email',
    'password',
    'phoneNumber',
    'artisteIds'
])

export default createConsumer;