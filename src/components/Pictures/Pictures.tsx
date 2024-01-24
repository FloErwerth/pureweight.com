import { Picture } from "@/components/Pictures/Picture.tsx";
import { useEffect, useMemo, useState } from "react";

const pics = [1, 2, 3];

const useRandomAttention = () => {
  const [random, setRandom] = useState(Math.random());
  const isAttention = random > 0.9;

  useEffect(() => {
    if (!isAttention) {
      setTimeout(() => {
        setRandom(Math.random());
      }, 1000);
    } else {
      setTimeout(() => {
        setRandom(Math.random());
      }, 10000);
    }
  }, [random, isAttention]);

  return useMemo(
    () =>
      isAttention
        ? { class: "picture-detail-attention", index: Math.floor(Math.random() * 3) }
        : undefined,
    [isAttention],
  );
};

export const Pictures = () => {
  const attentionClass = useRandomAttention();
  return (
    <div className="flex whitespace-break-spaces justify-evenly gap-3">
      {pics?.map((_, index) => <Picture attention={attentionClass} index={index} />)}
    </div>
  );
};
