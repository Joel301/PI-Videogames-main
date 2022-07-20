export const UPDATEVIDEOGAMELIST = "UPDATEVIDEOGAMELIST";

const initialState = {
    VideoGameList: [],
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATEVIDEOGAMELIST:
            return { ...state, VideoGameList: [...action.payload] };
        default:
            return { ...state };
    }
}
