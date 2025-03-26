import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../model/post';

@Pipe({
  name: 'imagenes',
  standalone: false
})
export class ImagenesPipe implements PipeTransform {

  transform(value: string[], ...args: number[]): string {
    if (value.includes('french')) {
      return "https://lalitaclasses.co.in/wp-content/uploads/2020/02/online-courses-of-French.jpg"
    }else if (value.includes('english')){
      return "https://www.shutterstock.com/image-vector/english-open-book-language-hand-260nw-1191427996.jpg"
    }else if (value.includes('history')){
      return "https://static.vecteezy.com/system/resources/previews/025/448/942/non_2x/history-textbook-school-book-and-doodle-symbols-vector.jpg"
    }else if (value.includes('fiction')){
      return "https://cdn1.epicgames.com/offer/578f39d17be846e7a6fa335f757012aa/EGS_SplitFiction_HazelightStudiosAB_S3_2560x1440-73ac6d111ce4312712b5c048f6a494b6"
    }else if (value.includes('mystery')){
      return  "https://hopkintonlibrary.org/wp-content/uploads/2024/03/mystery-1.jpg"
    }
    return "https://thereluctantnetworker.com/wp-content/uploads/2018/07/post.jpg"
  }

}
