export default function ManagementLayout({
    people,
    team,
    children,
}: {
    children: React.ReactNode;
    people: React.ReactNode;
    team: React.ReactNode
  }) {
    return (
        <div>
            {team}
            {people}
            {children}
        </div>
    )
}