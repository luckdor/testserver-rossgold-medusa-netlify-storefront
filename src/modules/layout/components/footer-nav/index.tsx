import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/">
            <a className="text-xl-semi uppercase">Wica</a>
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    <a>{c.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Wica</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://photos.onedrive.com/share/42DCABA6199E2232!148?cid=42DCABA6199E2232&resId=42DCABA6199E2232!148&authkey=!AOVi5pl8GZ5SfjA&ithint=photo&e=LWs1AP"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wechat scanning
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61550993903253&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook page
                </a>
              </li>
              <li>
                <a
                  href="https://1drv.ms/i/s!AjIinhmmq9xCgRV2gxBxkNk5QoVA?e=izjQMJ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tiktok scanning
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2023 Wica Stroe
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav

