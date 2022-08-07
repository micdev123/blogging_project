import React from 'react'
import { Post } from '../../components/Post/Post'
import { MdDateRange } from 'react-icons/md';
import { BiCurrentLocation, BiLike } from 'react-icons/bi';
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { AiOutlineLink } from 'react-icons/ai';


import './author.css'
import { FaRegComment } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';

export const Author = () => {
    return (
        <div className='Author_Component'>
            <div className='Main_Container'>
                <div className='Author__Container'>
                    <div className='Author_Profile'>
                        <div className='Author_Profile_Head'>
                            <div className='Author__Img'>
                                <img src='./assets/blog1.png' alt='Author_Img' />
                            </div>
                            <div className='Author_Head_Content'>
                                <h2 className='Author_Name'>Hellen Bangura</h2>
                                <p className='Author_Fields'>Web Developer, Economist</p>
                                <p className='Website_Link'>
                                    <AiOutlineLink className='icon'/>
                                    mic__dev.com
                                </p>
                            </div>
                        </div>
                        <div className='Author_Profile_Contents'>
                            <div className='Author_Profile_Bio'>
                                <p>In esse eu ea anim occaecat anim et quis qui laboris ullamco. Labore labore deserunt sit id ipsum sunt tempor do dolore veniam laborum. Fugiat ad elit in sint proident dolor labore minim anim enim ullamco reprehenderit. Ipsum culpa commodo nisi consequat.</p>
                            </div>
                            <p className='Author_Date_Joined'>
                                <MdDateRange className='icon' />
                                Member Since <span>Aug 2, 2022</span>
                            </p>
                            <p className='Author_Location'>
                                <BiCurrentLocation className='icon' />
                                Sierra Leone
                            </p>
                            <div className='Author_Profile_Keywords'>
                                <p>Politics</p>
                                <p>Machine Learning</p>
                                <p>Health</p>
                                <p>Engineering</p>
                            </div>
                            <div className='Author_Profile_Socials'>
                                <BsFacebook className='icon' />
                                <BsTwitter className='icon' />
                                <BsYoutube className='icon' />
                                <RiInstagramFill className='icon'/>
                            </div>
                        </div>
                    </div>
                    <div className='Author_Works'>
                        <h2>
                            <GrArticle className='icon' />
                            Published Work
                        </h2>
                        <div className='Author_Work_Container'>
                            <div className='Author_Work'>
                                <div className='Work_Image'>
                                    <img src='./assets/blog-img.png' alt='Post_Img' />
                                </div>
                                <div className='Author_Work_Contents'>
                                    <div className='Author_Work_Contents_Head'>
                                        <div className='Work_Head_Left'>
                                            <img src='./assets/blog2.png' alt='Author_Img' />
                                        </div>
                                        <div className='Work_Head_Right'>
                                            <h2>Michael L Bangura</h2>
                                            <div className='Work_Head_Right_Foot_'>
                                                <p>mic__dev.com</p>
                                                <div className='line'></div>
                                                <p>Aug 2, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Work_Contents_Body'>
                                        <h2 className='Work_Contents_Body_Title'>
                                            8 ways to use the Spread operator in JavaScript
                                        </h2>
                                        <p className='Work_Contents_Body_Desc'>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe necessitatibus eaque exercitationem eligendi voluptate illum.
                                        </p>
                                        <div className='Work_Contents_Body_Tags'>
                                            <p className='Tag'>javascript</p>
                                            <p className='Tag'>health</p>
                                            <p className='Tag'>web development</p>
                                        </div>
                                    </div>
                                    <div className='Work_Contents_Foot'>
                                        <p>2 min read</p>
                                        <div className='line'></div>
                                        <p className='info'>
                                            <BiLike className='icon' />
                                            10
                                        </p>
                                        <p className='info comment'>
                                            <FaRegComment className='icon' />
                                            10
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='Author_Work'>
                                <div className='Work_Image'>
                                    <img src='./assets/blog-img.png' alt='Post_Img' />
                                </div>
                                <div className='Author_Work_Contents'>
                                    <div className='Author_Work_Contents_Head'>
                                        <div className='Work_Head_Left'>
                                            <img src='./assets/blog2.png' alt='Author_Img' />
                                        </div>
                                        <div className='Work_Head_Right'>
                                            <h2>Michael L Bangura</h2>
                                            <div className='Work_Head_Right_Foot_'>
                                                <p>mic__dev.com</p>
                                                <div className='line'></div>
                                                <p>Aug 2, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Work_Contents_Body'>
                                        <h2 className='Work_Contents_Body_Title'>
                                            8 ways to use the Spread operator in JavaScript
                                        </h2>
                                        <p className='Work_Contents_Body_Desc'>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe necessitatibus eaque exercitationem eligendi voluptate illum.
                                        </p>
                                        <div className='Work_Contents_Body_Tags'>
                                            <p className='Tag'>javascript</p>
                                            <p className='Tag'>health</p>
                                            <p className='Tag'>web development</p>
                                        </div>
                                    </div>
                                    <div className='Work_Contents_Foot'>
                                        <p>2 min read</p>
                                        <div className='line'></div>
                                        <p className='info'>
                                            <BiLike className='icon' />
                                            10
                                        </p>
                                        <p className='info comment'>
                                            <FaRegComment className='icon' />
                                            10
                                        </p>
                                    </div>
                                </div>
                            </div>
                             <div className='Author_Work'>
                                <div className='Work_Image'>
                                    <img src='./assets/blog-img.png' alt='Post_Img' />
                                </div>
                                <div className='Author_Work_Contents'>
                                    <div className='Author_Work_Contents_Head'>
                                        <div className='Work_Head_Left'>
                                            <img src='./assets/blog2.png' alt='Author_Img' />
                                        </div>
                                        <div className='Work_Head_Right'>
                                            <h2>Michael L Bangura</h2>
                                            <div className='Work_Head_Right_Foot_'>
                                                <p>mic__dev.com</p>
                                                <div className='line'></div>
                                                <p>Aug 2, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Work_Contents_Body'>
                                        <h2 className='Work_Contents_Body_Title'>
                                            8 ways to use the Spread operator in JavaScript
                                        </h2>
                                        <p className='Work_Contents_Body_Desc'>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe necessitatibus eaque exercitationem eligendi voluptate illum.
                                        </p>
                                        <div className='Work_Contents_Body_Tags'>
                                            <p className='Tag'>javascript</p>
                                            <p className='Tag'>health</p>
                                            <p className='Tag'>web development</p>
                                        </div>
                                    </div>
                                    <div className='Work_Contents_Foot'>
                                        <p>2 min read</p>
                                        <div className='line'></div>
                                        <p className='info'>
                                            <BiLike className='icon' />
                                            10
                                        </p>
                                        <p className='info comment'>
                                            <FaRegComment className='icon' />
                                            10
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
