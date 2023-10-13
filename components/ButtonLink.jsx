import styles from "@/components/ButtonLink.module.css";
import buttonStyles from "./Button.module.css";
import Link from "next/link";

export default function ButtonLink({ className = "", ...props }) {
  return (
    <Link
      className={`${buttonStyles.button} ${styles.buttonLink} ${className}`}
      {...props}
    />
  );
}
