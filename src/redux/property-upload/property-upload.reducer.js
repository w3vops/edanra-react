import PropertyUploadTypes from "./property-upload.types";

const INITIAL_STATE = {
    isUploading: false,
    uploadedProperty: null,
    error: undefined
};

const propertyUploadReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case PropertyUploadTypes.PROPERTY_STORAGE_UPLOAD_START:
        case PropertyUploadTypes.PROPERTY_FIRESTORE_UPLOAD_START:
            return {
                ...state,
                isUploading: true
            };

        case PropertyUploadTypes.PROPERTY_STORAGE_UPLOAD_SUCCESS:
        case PropertyUploadTypes.PROPERTY_FIRESTORE_UPLOAD_SUCCESS:
            return {
                ...state,
                isUploading: false,
                uploadedProperty: action.payload
            };

        case PropertyUploadTypes.PROPERTY_FIRESTORE_UPLOAD_FAILURE:
        case PropertyUploadTypes.PROPERTY_STORAGE_UPLOAD_FAILURE:
        case PropertyUploadTypes.PROPERTY_EDIT_FAILURE:
            return {
                ...state,
                isUploading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default propertyUploadReducer;