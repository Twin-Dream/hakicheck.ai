import Footer4Col from "@/components/mvpblocks/footer-4col";
import NavigationBar from "@/components/shared/navigation-bar";
import { PropsWithChildren } from "react";

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <NavigationBar />
      {children}
      <Footer4Col />
    </main>
  );
}
