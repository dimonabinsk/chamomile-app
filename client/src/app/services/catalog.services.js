import httpServices from "./http.services";

const catalogEndPoint = "catalog/";

const catalogServices = {
    get: async () => {
        const {data} = await httpServices.get(catalogEndPoint);
        return data;
    }
};

export default catalogServices;