export const generateIncrementId=(lastId, data)=>{
    return {
        ...data,
        id: lastId + 1
    }
}