import { courseTypes } from "@/constants/courseType";

export function getCourseType(type:string) {
    return courseTypes
    .filter((currCourse:NameAndId) =>
        currCourse?.name.toLowerCase() === type.toLowerCase())[0]
}