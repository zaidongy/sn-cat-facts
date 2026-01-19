import { Test } from '@servicenow/sdk/core'

export default Test(
    {
        $id: 'a3d0892883edea50ceda52e0deaad39f',
        active: true,
        description: 'sample test 2',
        failOnServerError: true,
        name: 'Sample test 2',
    },
    (atf) => {
        atf.form.openNewForm({ table: 'incident', $id: '2e02c9ac83edea50ceda52e0deaad310' })
    }
)
