

export interface Candidate {
id: string;
name:string;
location:string;
avatar_url:string;
email:string;
followers_url:number
URL: string
github:string;
githubUser:string;
login:string;
html_url:string;
status: 'Applied'| 'Interviewing'| 'Hired'|'Rejected';
profilePicture?: string;
}
