import clsx from "clsx";

type Props = {
  size?: "sm" | "md" | "lg" | "xl",
  src?: string;
}

export default function Avatar({size = "md", src}: Props) {
  return (
    <img
      className={clsx("rounded-full object-cover", {
        "w-12 h-12": size === "md",
        "w-8 h-8": size === "sm",
        "w-16 h-16": size === "lg",
        "w-48 h-48": size === "xl"
      })}
      src={src ?? "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"}
    />
  );
}
