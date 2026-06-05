type Props = {
  children: React.ReactNode;
};

/** Root passthrough; `<html>` vive en `app/[locale]/layout.tsx`. */
export default function RootLayout({ children }: Props) {
  return children;
}
