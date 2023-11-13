import { updateOne } from "../../lib/helper";
import Consumer from "../../models/Consumer";

const updateConsumer = updateOne(Consumer, [
    'firstName',
    'lastName',
    'username',
    'email',
    'password',
    'phoneNumber',
    'artisteIds'
])

export default updateConsumer;