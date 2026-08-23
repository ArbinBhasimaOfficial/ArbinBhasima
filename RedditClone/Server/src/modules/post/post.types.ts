// not needed once we start to work with db
export type Post = {
  id: string;
  title: string;
  content: string;
  images: string[];
  // todo replace with User Type
  createdBy: {
    id: string;
    name: string;
  }
}
