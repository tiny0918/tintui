import React from "react";
import { Upload } from './upload'
import { action } from '@storybook/addon-actions'
import Button from '../Button/button'
import Icon from '../Icon/icon'

const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false;
    }
    return true;
  }
const UploadExample = () => {
	return (
		<Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={action('changed')}
            beforeUpload={checkFileSize}
            >
            <Button size="lg" btnType="primary"><Icon icon="upload" /> 不能传大于50Kb！ </Button>
        </Upload>  
	  )
};
export default UploadExample;