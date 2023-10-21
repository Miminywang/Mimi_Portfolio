import React, { useState } from "react"; 
import { IoSchoolOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import colorSharp from "../assets/img/color-sharp.png";

export const Background = () => {
  const [ isHovered, setIsHovered ] = useState(false);

  return (
    <section className="background" id="background">
      <div className="container">
        <div className="background-bx"
             onMouseEnter={ ()=>setIsHovered(true) }
             onMouseLeave={ ()=>setIsHovered(false) }
        >
          <h2>Background</h2>
          <p className="subtitle">THE GLORY OF THE PAST</p>
          <br />

          <div className="degree">
            <h3 className="text-center"><IoSchoolOutline /><span />Education</h3>
            <p className={`animate__animated ${isHovered ? 'animate__fadeInLeft' : ''}`}>2020 MA in International Multimedia and Journalism, Newcastle University, UK
            </p>
            <p className={`animate__animated ${isHovered ? 'animate__fadeInRight' : ''}`}>
            2015 兒童發展與家庭教育學系學士, 慈濟大學, 臺灣
            </p>
          </div>
          
          <div className="divider"></div>

          <div className="work-experience">
            <h3 className="text-center"><MdWorkOutline /><span />Work Experiences</h3>
              <div className={`animate__animated ${isHovered ? 'animate__fadeInLeft' : ''}`}> 
                <div className="work-list">
                  <h5>中央通訊社 | Central News Agency</h5>
                  <span>06-2021 - 06-2023</span>
                  <p>英文編譯 | Editor</p>
                </div>               
              </div>
             
              <div className={`animate__animated ${isHovered ? 'animate__fadeInRight' : ''}`}> 
                <div className="work-list">
                  <h5>安益國際展覽 | Interplan International Corp.</h5>
                  <span>01-2021 - 05-2021</span>
                  <p>採訪編輯 | Writer</p>
                </div>
              </div>

              <div className={`animate__animated ${isHovered ? 'animate__fadeInLeft' : ''}`}> 
                <div className="work-list">
                  <h5>智擎數位科技 | FUNDAY</h5>
                  <span>01-2021 - 05-2021</span>
                  <p>採訪編輯 | Writer</p>
                </div>
              </div>           
          </div>
        
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}

export default Background;
