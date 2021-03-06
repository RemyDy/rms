import React, {useEffect, useState} from "react";
import "./ImageLoad.css";

const ImageLoad = React.memo(({src, placeholder, alt = ""}) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(placeholder);


    useEffect(() => {
        //start loading original image
        const imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = () => {
            // When image is loaded replace the src and set loading to false
            setLoading(false);
            updateSrc(src);
        }
    }, [src])

    return (
        <img
            src={currentSrc}
            alt={alt}
            style={loading}
        />
    )
});

export default ImageLoad;