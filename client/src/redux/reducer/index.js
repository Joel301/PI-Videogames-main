export const UPDATEVIDEOGAMELIST = "UPDATEVIDEOGAMELIST";
export const GETGAMEDETAIL = "GETGAMEDETAIL";
export const FILTERLIST = "FILTERLIST";
export const UPDATESEARCH = "UPDATESEARCH";
export const CURRENTPAGE = "CURRENTPAGE";
export const CHANGEORDER = "CHANGEORDER";
export const REFRESHLIST = "REFRESHLIST";
export const CHANGEFILTERGENRE = "CHANGEFILTERGENRE";

export const order = {
    NOMBREASC: "NOMBREASC",
    NOMBREDESC: "NOMBREDESC",
    RATINGASC: "RATINGASC",
    RATINGDESC: "RATINGDESC",
};

export const filterOrigin = {
    USERCREATE: "USERCREATE",
    APIGAME: "APIGAME",
};

export const orderFunction = {
    NOMBREASC: (a, b) => ("" + a.name).localeCompare(b.name),
    NOMBREDESC: (a, b) => ("" + b.name).localeCompare(a.name),
    RATINGASC: (a, b) => a.rating - b.rating,
    RATINGDESC: (a, b) => b.rating - a.rating,
};

export const filterFunction = (data) => {
    // const data_ = data;
    // console.log("start", data_);
    if (data == "") {
        console.log("estavacio--->", data);
        return (a) => a;
    }

    return (a) => {
        // console.log(a, data_);
        // console.log(a.genres, a.genres.indexOf(data_) != -1);
        if (a == undefined) return a;
        return a.genres.map((b) => b.ID).indexOf(data) != -1;
        // return true;
    };
};

const initialState = {
    VideoGameList: [],
    ListFiltered: [],
    GameDetail: {},
    currentPage: 0,
    orderBy: order.NOMBREASC,
    search: "",
    filters: {
        origin: [],
        genre: "",
    },
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATEVIDEOGAMELIST:
            return {
                ...state,
                VideoGameList: [...action.payload].sort(
                    orderFunction[state.orderBy]
                ),
            };
        case GETGAMEDETAIL:
            return { ...state, GameDetail: action.payload };
        case FILTERLIST:
            return {
                ...state,
                ListFiltered: action.payload.sort(orderFunction[state.orderBy]),
                filters: {
                    origin: [],
                    genre: "",
                },
            };
        case UPDATESEARCH:
            return { ...state, search: action.payload };
        case CURRENTPAGE:
            return { ...state, currentPage: action.payload };
        case CHANGEORDER:
            return { ...state, orderBy: action.payload };
        case REFRESHLIST:
            console.log("====", state.ListFiltered == []);
            console.log("====", [
                ...state.VideoGameList.sort(
                    orderFunction[state.orderBy]
                ).filter((a) => filterFunction(state.filters.genre)(a)),
            ]);
            console.log("===2", [
                ...state.ListFiltered.sort(orderFunction[state.orderBy]).filter(
                    (a) => filterFunction(state.filters.genre)(a)
                ),
            ]);

            var newData =
                state.search == ""
                    ? [
                          ...state.VideoGameList.sort(
                              orderFunction[state.orderBy]
                          ).filter((a) =>
                              filterFunction(state.filters.genre)(a)
                          ),
                      ]
                    : [
                          ...state.ListFiltered.sort(
                              orderFunction[state.orderBy]
                          ).filter((a) =>
                              filterFunction(state.filters.genre)(a)
                          ),
                      ];
            console.log(newData);
            return {
                ...state,
                VideoGameList: state.VideoGameList.sort(
                    orderFunction[state.orderBy]
                ),
                ListFiltered: [...newData],
                currentPage: 0,
            };
        case CHANGEFILTERGENRE:
            return {
                ...state,
                filters: { ...state.filters, genre: action.payload },
            };
        default:
            return { ...state };
    }
}
