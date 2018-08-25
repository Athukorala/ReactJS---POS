import React from 'react';
import Drag from '../../../Content/images/drag.png';
import connect from "react-redux/es/connect/connect";
// import classes from './icon.css';


const style ={

    textAlign: 'center',
    // margin: '15px 1px',
    height: '150px',
    width: '180px',
    borderRadius:'6px',
    backgroundColor:'#414141',
    border:'1px solid #7E7E7E'
    // borderLeft: '1px solid gray',
    // borderRight: '1px solid gray',
    // borderTop: '5px solid gray',
    // borderBottom: '5px solid gray'

}

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    }

    _handleSubmit(e) {
        e.preventDefault();

        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        const urlArray=[];
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];



        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
        // console.log(reader)
        // console.log(reader.result)
        urlArray.push(reader);
        // this.props.onImageSendHandler(urlArray);
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} style={{width:'100%',height:'100%',borderRadius:'6px',objectFit:'contain'}} alt="imageupload"/>);
        } else {
            $imagePreview = (<div className="previewText">
                <img src={Drag} style={{width:'50%',height:'50%',borderRadius:'6px',marginTop:'2%'}} alt="imageupload"/>
                <br />
                <small style={{
                    color: this.props.white ? 'black':'#7E7E7E',
                    fontSize:'12px'
                }}>Please select an Image for Preview</small>
            </div>);
        }

        return (

            <div className="previewComponent">
                {/*<div className="previewComponent" style={{cursor:'pointer',borderRadius:'18px',width:'300px', backgroundColor:'#F5F5F5'}}>*/}
                <center>
                    <form onSubmit={(e)=>this._handleSubmit(e)} >
                        <input className="fileInput"
                               type="file"
                               accept=".jpg, .jpeg, .png"
                               style={{
                                   cursor:'pointer',
                                   width: '180px',
                                   height: '150px',
                                   zIndex:  '10000',
                                   position:  'fixed',
                                   marginTop: '0%',
                                   marginLeft: '-9%',
                                   opacity: '0'
                               }}
                               onChange={(e)=>this._handleImageChange(e)}/>

                        {/*-----------------------------*/}

                        {/*<button className="submitButton"*/}
                        {/*type="submit"*/}
                        {/*onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>*/}
                    </form>
                    <div className="imgPreview" style={{
                        textAlign: 'center',
                        height: '150px',
                        width: '180px',
                        borderRadius: '6px',
                        backgroundColor: this.props.white ? 'white' : '#414141',
                        border: '1px solid #7E7E7E'
                    }}>
                        {$imagePreview}
                    </div>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        // images:state.advertiserUIRed.images,
        // imgFiles:state.advertiserUIRed.imageFiles

    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        // onHandleImages:(data)=>dispatch(actionCreators.onHandleImages(data)),
        // onHandleImageFiles:(data)=>dispatch(actionCreators.onHandleImageFiles(data)),
        // onHandleSizeLimit:(data)=>dispatch(actionCreators.onHandleSizeLimit(data)),
        //
        // //---
        // onImageSendHandler: (image) => dispatch(actionCreators.imageSendHandler(image))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageUpload);