import { createClient } from "@/utils/supabase/server";

const Leaderboard = async () => {
    const supabase = createClient()
  const { data: leaderboard } = await supabase.from('leaderboard').select().order('games_won', {ascending: false}).limit(10)
    return (
        <>
        <h2>Current leaderboard</h2>
        <pre>{JSON.stringify(leaderboard, null, 2)}</pre>
        </>
    )
}

export default Leaderboard;