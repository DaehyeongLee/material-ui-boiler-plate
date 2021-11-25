import userList from "./user.json";

const FilterExample_Backend = (obj) => {

    if (obj) {
        return userList.filter((item, index) => item.name.includes(obj.name || ""))
        .filter((item, index) => item.order.includes(obj.order || ""))
        .filter((item, index) => item.phone.includes(obj.phone || ""))
        .filter((item, index) => item.address.includes(obj.address || ""))
    }
    else {
        return userList
    }

}

export default FilterExample_Backend