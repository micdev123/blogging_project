import React, { useState } from 'react'
import { AuthorRightSide } from '../../components/Author-Right-Side/AuthorRightSide'

import { AiFillEdit, AiFillDelete, AiOutlineLike, AiFillCloseCircle } from 'react-icons/ai'
import { BsFillReplyAllFill } from 'react-icons/bs'
import { HiCubeTransparent } from 'react-icons/hi'

import './single-post.css'
import { RelatedPost } from '../../components/Related-Post/RelatedPost'


export const SinglePost = () => {
    const [rightBar, setRightBar] = useState(false);
    const [closeRightBar, setCloseRightBar] = useState(false);

    const close_rightbar = () => {
        setCloseRightBar(true);
        setRightBar(false);
    }

    return (
        <div className={!rightBar ? 'Single_Post_Component' : 'Set_Fixed'}>
            <div className={!rightBar ? 'Display_None' : 'Overlay_Single_Post'}></div>
            <div className='Main_Container'>
                <div className='Single_Post_Container'>
                    <div className='Single_Post_Left'>
                        <div className='Single_Post'>
                            <div className='Single_Post_Img'>
                                <img src='./assets/blog-img.png' alt='Single_Post_Img' />
                            </div>
                            <div className='Single_Post_Left_Contents'>
                                <div className='Single_Post_Left_Head'>
                                    <div className='Post_Head_Left'>
                                        <img src='./assets/blog2.png' alt='Author_Img' />
                                    </div>
                                    <div className='Post_Head_Right'>
                                        <h2>Michael L Bangura</h2>
                                        <div className='Post_Head_Right_Foot'>
                                            <div className='Foot_Left'>
                                                <p>mic__dev.com</p>
                                                <div className='line_'></div>
                                                <p>Aug 2, 2022</p>
                                            </div>
                                            <div className='Single_Post_Actions'>
                                                <AiFillEdit className='icon edit' />
                                                <AiFillDelete className='icon trash' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <h2 className='Single_Post_Title'>
                                    8 ways to use the Spread operator in JavaScript
                                </h2>
                                <div className='Single_Post_Body'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error, neque impedit repellat doloremque quisquam cupiditate nihil, molestiae placeat assumenda, voluptate explicabo. Praesentium sit illum voluptatibus quis perferendis provident nisi commodi quae deserunt optio. Voluptate maiores excepturi tempora dolores deserunt, beatae ratione iste nam neque asperiores natus fuga nostrum consectetur cupiditate labore expedita! Dolorum saepe quidem sapiente ea nobis minima voluptas quia suscipit, nemo commodi sequi. 
                                        Culpa proident in eu pariatur qui sint incididunt amet non aliquip. Excepteur cupidatat dolore esse dolore eiusmod laborum. Lorem ipsum cupidatat adipisicing nostrud ad ad id culpa duis tempor enim ea. Mollit pariatur id excepteur quis nisi nisi est consequat tempor adipisicing non cupidatat culpa nisi. Irure amet eiusmod laboris voluptate Lorem voluptate.

                                        Qui ex quis duis laboris magna aliqua deserunt ex minim nulla. Adipisicing ut do ex magna cillum ipsum nulla labore anim deserunt ad aliqua elit. In incididunt id est qui aute adipisicing tempor ea eu excepteur. Do ut eu ut sunt est laborum cillum aliqua anim est.

                                        Anim ad est do magna. Labore pariatur ipsum id pariatur eiusmod exercitation aliqua deserunt. Mollit non ea officia est sint commodo sint voluptate fugiat aliquip eiusmod. Esse ad nostrud elit ea cupidatat non dolor mollit aliqua deserunt eu reprehenderit sunt. Non cupidatat amet do est sunt duis non.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='Single_Post_Left_Footer'>
                            <div className='Pagination'>
                                <div className='Previous'>
                                    <div className='Pagination_Overlay'></div>
                                    <img src='./assets/featured.png' alt='Previous' />
                                    <div className='Pagination_Content'>
                                        <h2>Data Structure In Javascript</h2>
                                        <p>Previous</p>
                                    </div>
                                </div>
                                <div className='Next'>
                                    <div className='Pagination_Overlay'></div>
                                    <img src='./assets/blog-img.png' alt='Next' />
                                    <div className='Pagination_Content'>
                                        <h2>Recursion In JavaScript</h2>
                                        <p>Next</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Single_Comments'>
                                <div className='Comment_Head'>
                                    <h2>Comments(2)</h2>
                                    <button className='Comment_Btn'>
                                        <AiFillEdit className='icon'/>
                                        Leave a comment
                                    </button>
                                </div>
                                <div className='Comment_Form'></div>
                                <div className='Comments'>
                                    <div className='Single_Comment'>
                                        <div className='Commenter_Head'>
                                            <div className='Commenter_Img'>
                                                <img src='./assets/blog1.png' alt='Commenter_Img' />
                                            </div>
                                            <div className='Commenter_Info'>
                                                <h2>Hellen Bangura</h2>
                                                <div>
                                                    <p>Web Developer</p>
                                                    <p>1 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Comment_Body'>
                                            <p>
                                                Proident laborum aute aliqua consequat ad pariatur non cillum magna magna consequat duis ad. Officia veniam nisi proident enim aute in exercitation adipisicing est in deserunt tempor labore commodo. Sunt elit ipsum magna minim sunt pariatur ipsum ea dolore dolor culpa elit.
                                            </p>
                                            <div className='Single_Comment_Actions'>
                                                <p className='Reply_Btn'>
                                                    <BsFillReplyAllFill className='icon' />
                                                    Reply
                                                </p>
                                                <p className='line_'></p>
                                                <p>
                                                    <AiOutlineLike className='icon' />
                                                    <span>1</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className='Reply_Container'>
                                            <div className='Reply_Head'>
                                                <div className='Replier_Img'>
                                                    <img src='./assets/blog1.png' alt='Replyer_Img' />
                                                </div>
                                                <div className='Replier_Info'>
                                                    <h2>Hellen Bangura</h2>
                                                    <div>
                                                        <p>Web Developer</p>
                                                        <p>1 hour ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Reply_Body'>
                                                <p>
                                                    Proident laborum aute aliqua consequat ad pariatur non cillum magna magna consequat duis ad. Officia veniam nisi proident enim aute in exercitation adipisicing est in deserunt tempor labore commodo. Sunt elit ipsum magna minim sunt pariatur ipsum ea dolore dolor culpa elit.
                                                </p>
                                            </div>
                                            <div className='Reply_Actions'>
                                                <p className='Reply_Btn'>
                                                    <BsFillReplyAllFill className='icon' />
                                                    Reply
                                                </p>
                                                <p className='line_'></p>
                                                <p>
                                                    <AiOutlineLike className='icon' />
                                                    <span>1</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='Single_Post_Right'>
                        <div className='Single_Post_Author'>
                            <AuthorRightSide />
                            <div className='Categories_'>
                                <h2>Categories</h2>
                                <div className='Category'>
                                    <p>Education</p>
                                    <p>Medicine</p>
                                    <p>Politics</p>
                                    <p>Motivation</p>
                                    <p>Economy</p>
                                </div>
                            </div>
                            <RelatedPost />
                        </div>
                    </div>

                    <div className='Right_Sidebar_Icon'>
                        <HiCubeTransparent className='icon' onClick={(e) => setRightBar(!rightBar)} />
                    </div>

                    {rightBar && (
                        <div className='Single_Post_Right_Small_Screen'>
                            <AiFillCloseCircle className='Close_Sidebar' onClick={close_rightbar} />
                            <div className='Single_Post_Author'>
                                <AuthorRightSide />
                                <div className='Categories_'>
                                    <h2>Categories</h2>
                                    <div className='Category'>
                                        <p>Education</p>
                                        <p>Medicine</p>
                                        <p>Politics</p>
                                        <p>Motivation</p>
                                        <p>Economy</p>
                                    </div>
                                </div>
                                <RelatedPost className='RelatedPosts' />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
