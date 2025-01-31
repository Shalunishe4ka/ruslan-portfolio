import React from 'react'
import EducationNumericList_1 from "./assets/1_12.png"
import EducationNumericList_2 from "./assets/2_04.png"
import EducationNumericList_3 from "./assets/3_17.png"


export const EducationNumericList = () => {
    return (
        <div className='education-numeric-list-main'>
            <div className='education-numeric-list-div'>
                <img src={EducationNumericList_1} alt='EducationNumericList_1' width={165} height={175} />
                <div>
                    <h1>
                        2020-2024 Южный Федеральный Университет
                    </h1>
                    <p>
                        Кафедра вычислительной техники 09.03.01 Информатика и вычислительная техника
                    </p>
                    <p>
                        Бакалавр, окончил с красным дипломом
                    </p>
                </div>

            </div>
            <div className='education-numeric-list-div'>
                <img src={EducationNumericList_2} alt='EducationNumericList_2' width={165} height={175} />

                <div>
                    <h1>
                        2020-2024 Южный Федеральный Университет
                    </h1>
                    <p>
                        Кафедра вычислительной техники 09.03.01 Информатика и вычислительная техника
                    </p>
                    <p>
                        Бакалавр, окончил с красным дипломом
                    </p>
                </div>


            </div>
            <div className='education-numeric-list-div'>
                <img src={EducationNumericList_3} alt='EducationNumericList_3' width={165} height={175} />



                <div>
                    <h1>
                        2020-2024 Южный Федеральный Университет
                    </h1>
                    <p>
                        Кафедра вычислительной техники 09.03.01 Информатика и вычислительная техника
                    </p>
                    <p>
                        Бакалавр, окончил с красным дипломом
                    </p>
                </div>

            </div>
        </div>
    )
}
