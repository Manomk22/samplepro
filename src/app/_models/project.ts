import { tag } from "./tag";

export interface project{
    id:number;
    name:string;
    summary:string;
    description:string;
    projectLink:string;
    pictures:string[];
    tag:tag[];
}