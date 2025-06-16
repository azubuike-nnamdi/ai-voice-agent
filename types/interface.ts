type CompanionCardProps = {
  id: string,
  name: string,
  topic: string,
  subject: string,
  duration: string,
  color: string
}

type CompanionListProps = {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

export type { CompanionCardProps, CompanionListProps };