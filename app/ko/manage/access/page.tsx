import type { Metadata } from "next";
import ManageDashboardView from "@/components/views/ManageDashboardView";
import { verifyToken } from "@/lib/manage-token";
import { getDict } from "@/lib/i18n";

const dict = getDict("ko");

export const metadata: Metadata = {
  title: dict.manage.dashboardTitle,
  robots: { index: false, follow: false },
};

export default function ManageAccessPageKo({
  searchParams,
}: {
  searchParams?: { token?: string };
}) {
  const token = typeof searchParams?.token === "string" ? searchParams.token : null;
  const verified = token ? verifyToken(token) : null;
  return (
    <ManageDashboardView
      lang="ko"
      token={verified ? token : null}
      email={verified?.email ?? null}
    />
  );
}
