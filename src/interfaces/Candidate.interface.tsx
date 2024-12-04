

export interface Candidate {
id: string;
name:string;
location:string;
Avatar:string;
email:string;
followers:number
URL: string
github:string;
githubUser:string;
status: 'Applied'| 'Interviewing'| 'Hired'|'Rejected';
profilePicture?: string;
}
