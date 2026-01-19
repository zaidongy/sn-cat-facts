import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "package_json": {
                            "table": "sys_module",
                            "id": "777d34dd63a945268b809bfef3bc91e1"
                        },
                        "sys_variable_value_undefined_undefined_bb84ed825320220002c6435723dc3400": {
                            "table": "sys_variable_value",
                            "id": "b049b66cd9b64b1c90a091279a83f24c"
                        },
                        "sys_variable_value_undefined_undefined_3a662f60a3023110571967d1361e6134": {
                            "table": "sys_variable_value",
                            "id": "064c98bc2b5d4ac6ba2ac4265165d6a3"
                        },
                        "sys_variable_value_undefined_undefined_6f2a59a4e7133300b5646ea8c2f6a975": {
                            "table": "sys_variable_value",
                            "id": "b5d7bd30243147e1887d150885a1e78f"
                        },
                        "sys_variable_value_undefined_undefined_27d4e1c25320220002c6435723dc3486": {
                            "table": "sys_variable_value",
                            "id": "30021756d2b24849bd1f83047ddb9902"
                        }
                    };
            }
        }
    }
}
