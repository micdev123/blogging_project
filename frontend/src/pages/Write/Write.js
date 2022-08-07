import React from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi';

import './write.css'

export const Write = () => {
    return (
        <div className='Write_Component'>
            <div className='Main_Container'>
                <div className='Write_Container'>
                    <img className="Write_Img" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                
                    <form className='Write_Form_Container'>
                        <div className='Form_Group'>
                            <label htmlFor='File_Input'>
                                <BiMessageSquareAdd className='icon' />
                            </label>
                            <input type='file' id='File_Input' style={{ display: "none" }} />
                            <input type='text' placeholder='Title' className='Text_Input' autoFocus={true} />
                        </div>
                        <div className='Form_Group'>
                            <textarea placeholder='Tell your story...' type='text' className='Text_Input Textarea'></textarea>
                        </div>
                        <button className='Publish'>Publish</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
