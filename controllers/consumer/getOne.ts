import { getOne } from "../../lib/helper";
import Consumer from "../../models/Consumer";

const getOneConsumer = getOne(Consumer, ['artisteIds'], []);

export default getOneConsumer;