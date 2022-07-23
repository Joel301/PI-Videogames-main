export const UPDATEVIDEOGAMELIST = "UPDATEVIDEOGAMELIST";
export const GETGAMEDETAIL = "GETGAMEDETAIL";
export const FILTERLIST = " FILTERLIST";
export const UPDATESEARCH = " UPDATESEARCH";

const initialState = {
    VideoGameList: [],
    ListFiltered: [],
    GameDetail: {},
    search: "",
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATEVIDEOGAMELIST:
            return { ...state, VideoGameList: [...action.payload] };
        case GETGAMEDETAIL:
            return { ...state, GameDetail: action.payload };
        case FILTERLIST:
            return { ...state, ListFiltered: action.payload };
        case UPDATESEARCH:
            return { ...state, search: action.payload };
        default:
            return { ...state };
    }
}
