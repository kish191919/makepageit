import type { Metadata } from "next";
import ManageRequestView from "@/components/views/ManageRequestView";
import { getDict } from "@/lib/i18n";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.manage.pageTitle,
  description: dict.manage.pageDescription,
  robots: { index: false, follow: false },
};

export default function ManagePage() {
  return <ManageRequestView lang="en" />;
}
