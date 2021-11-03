import React from 'react'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
interface Prop {
    value:number,
    text:string,
    color:string

}
const Rating:React.FC<Prop>=({ value, text, color })=> {
    return (
        <div className="rating">
            <span>
              {value>=1?<StarIcon/>:<StarHalfIcon/>}
            </span>

            <span>
                {
                    value >= 2? <StarIcon/>: value >= 1.5
                            ? <StarHalfIcon/>
                            : <StarBorderIcon/>
                }

            </span>

            <span>
                {
                    value >= 3
                        ? <StarIcon/>
                        : value >= 2.5
                            ? <StarHalfIcon/>
                            : <StarBorderIcon/>
                }

                
            </span>

            <span>
                {
                    value >= 4
                        ? <StarIcon/>
                        : value >= 3.5
                            ? <StarHalfIcon/>
                            : <StarBorderIcon/>
                }

            </span>

            <span>
              {
                    value >= 5
                        ? <StarIcon/>
                        : value >= 4.5
                            ? <StarHalfIcon/>
                            : <StarBorderIcon/>
                }

          
            </span>

            <span>{text && text}</span>
        </div>
    )
}

export default Rating