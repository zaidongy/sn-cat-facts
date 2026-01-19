import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: 'da69bdfa8348aa10ceda52e0deaad3e8',
    table: 'sys_alias_templates',
    data: {
        default_data_template: `{
	"credential": {
		"user_name": "<user-name>",
        "password": "<password>",
		"name": "<provider-name> Spoke Credential",
		"table": "basic_auth_credentials"
	},
	"connection": {
		"connection_url": "",
		"name": "",
		"table": "http_connection"
	}
}`,
        dynamic_data_schema:
            '{"credential_fields":[{"defaultValue":"","hint":"Username for outbound authentication","name":"credential.user_name","label":"User Name","type":"text","mandatory":true},{"defaultValue":"","hint":"Password for outbound authentication","name":"credential.password","label":"Password","type":"password","mandatory":true}],"connection_fields":[{"defaultValue":"<provider-name> Spoke Connection","hint":"Display name for the Connection","name":"connection.name","label":"Connection Name","type":"text","mandatory":true},{"defaultValue":"https://engineering.paypalcorp.com/ownership/api","hint":"Connection URL for provider","name":"connection.connection_url","label":"Connection URL","type":"text","mandatory":true}]}',
        name: 'Cat Facts Configuration Template',
        sys_name: 'Cat Facts Configuration Template',
    },
})
