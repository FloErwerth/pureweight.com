import { useEffect, useState } from "react";
import { Picture } from "@/components/Pictures/Picture.tsx";

const getMockPics = () => {
  const pics = [1, 2, 3];

  return Promise.all(pics.map(async () => await fetch(`https://picsum.photos/360/600`).then((res) => res.blob())));
};

export const Pictures = () => {
  const [pics, setPics] = useState<string[] | undefined>();

  useEffect(() => {
    getMockPics().then((res) => setPics(res.map((blob) => URL.createObjectURL(blob))));
  }, []);

  return <div className="flex whitespace-break-spaces justify-evenly">{pics?.map((blob, index) => <Picture index={index} src={blob} />)}</div>;
};
