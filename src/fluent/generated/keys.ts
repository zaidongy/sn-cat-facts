import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '3349f1328388aa10ceda52e0deaad3cf': {
                        table: 'sys_openapi'
                        id: '3349f1328388aa10ceda52e0deaad3cf'
                        deleted: true
                    }
                    '3b49357a8388aa10ceda52e0deaad3d0': {
                        table: 'sys_openapi_operation'
                        id: '3b49357a8388aa10ceda52e0deaad3d0'
                        deleted: true
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '2c9257b6d8c4420c80e997fb46cbf569'
                    }
                    e116bbc38348ae10ceda52e0deaad320: {
                        table: 'sys_script_fix'
                        id: 'e116bbc38348ae10ceda52e0deaad320'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0b8cd7b991f84436999e03c754710818'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '034c974d83e23e90ceda52e0deaad3db'
                        key: {
                            name: 'var__m_sys_hub_action_output_7093c63c83a27690ceda52e0deaad392'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '034c974d83e23e90ceda52e0deaad3e3'
                        key: {
                            field: '__action_status__'
                            id: '7093c63c83a27690ceda52e0deaad392'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '062201ec83edea50ceda52e0deaad3bf'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '2e02c9ac83edea50ceda52e0deaad310'
                            variable: 'bb84ed825320220002c6435723dc3400'
                        }
                    },
                    {
                        table: 'sc_cat_item_user_criteria_no_mtom'
                        id: '0635c49d83c97650ceda52e0deaad386'
                        key: {
                            sc_cat_item: '8315049d83c97650ceda52e0deaad3e0'
                            user_criteria: '66c1b50e730333009508738234f6a7c9'
                        }
                    },
                    {
                        table: 'sys_hub_flow_stage'
                        id: '0864401983c97650ceda52e0deaad3d0'
                        key: {
                            flow: 'b32484d583c97650ceda52e0deaad32b'
                            value: 'waiting_for_approval'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0945c4dd83c97650ceda52e0deaad3c8'
                        key: {
                            cat_item: '8315049d83c97650ceda52e0deaad3e0'
                            variable_set: 'NULL'
                            name: 'seed'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0a6c138d83e23e90ceda52e0deaad380'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'c26c138d83e23e90ceda52e0deaad359'
                            variable: '371837f1c71003007b237f48cb9763b0'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '0a6c138d83e23e90ceda52e0deaad389'
                        key: {
                            model: '756c138d83e23e90ceda52e0deaad34d'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0b4c974d83e23e90ceda52e0deaad3e3'
                        key: {
                            document: 'sys_hub_action_type_definition'
                            document_key: '7093c63c83a27690ceda52e0deaad392'
                            variable: 'be4c974d83e23e90ceda52e0deaad31a'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0e6c138d83e23e90ceda52e0deaad381'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'c26c138d83e23e90ceda52e0deaad359'
                            variable: '4328e2fb47222200b4fad7527c9a7164'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '14502fc583663e90ceda52e0deaad3eb'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'ee4c574d83e23e90ceda52e0deaad3d4'
                            variable: '262882f03b23320057a4a2e334efc4f0'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '1634c8d583c97650ceda52e0deaad37e'
                        key: {
                            model: 'b32484d583c97650ceda52e0deaad32b'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a34c8d583c97650ceda52e0deaad37a'
                        key: {
                            name: 'var__m_sys_hub_flow_input_b32484d583c97650ceda52e0deaad32b'
                            element: 'request_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '1fe4c81d83c97650ceda52e0deaad3ac'
                        key: {
                            model: '83e4c81d83c97650ceda52e0deaad36a'
                            element: 'request_item'
                        }
                    },
                    {
                        table: 'sys_hub_flow_stage'
                        id: '1fe4c81d83c97650ceda52e0deaad3c8'
                        key: {
                            flow: '83e4c81d83c97650ceda52e0deaad36a'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '256cdf4d83e23e90ceda52e0deaad3b0'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'ee4c574d83e23e90ceda52e0deaad3d4'
                            variable: '371837f1c71003007b237f48cb9763b0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e9d5b4583263e90ceda52e0deaad32d'
                        key: {
                            name: 'var__m_sys_hub_action_output_7093c63c83a27690ceda52e0deaad392'
                            element: 'fact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '324c974d83e23e90ceda52e0deaad310'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'ee4c574d83e23e90ceda52e0deaad3d4'
                            variable: '15288f755bd24110ab933520b881c713'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '324c974d83e23e90ceda52e0deaad312'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'ee4c574d83e23e90ceda52e0deaad3d4'
                            variable: 'a67a8ef03b23320057a4a2e334efc472'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '390e880f9f574c93bc247753659b19bd'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '2e02c9ac83edea50ceda52e0deaad310'
                            variable: '3a662f60a3023110571967d1361e6134'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '426c138d83e23e90ceda52e0deaad382'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'c26c138d83e23e90ceda52e0deaad359'
                            variable: '7a59009bc7522010820469467ec260c0'
                        }
                    },
                    {
                        table: 'sys_hub_flow_stage'
                        id: '4464401983c97650ceda52e0deaad3d0'
                        key: {
                            flow: 'b32484d583c97650ceda52e0deaad32b'
                            value: 'complete'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '462201ec83edea50ceda52e0deaad3be'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '2e02c9ac83edea50ceda52e0deaad310'
                            variable: '6f2a59a4e7133300b5646ea8c2f6a975'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: '4635cc9d83c97650ceda52e0deaad3e3'
                        key: {
                            id: '8315049d83c97650ceda52e0deaad3e0'
                            field: 'price'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4a6c138d83e23e90ceda52e0deaad37f'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'c26c138d83e23e90ceda52e0deaad359'
                            variable: '15288f755bd24110ab933520b881c713'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '4be4c81d83c97650ceda52e0deaad36d'
                        key: {
                            model: '83e4c81d83c97650ceda52e0deaad36a'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4d702f0983663e90ceda52e0deaad3b7'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'c26c138d83e23e90ceda52e0deaad359'
                            variable: '262882f03b23320057a4a2e334efc4f0'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4e6c138d83e23e90ceda52e0deaad380'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'c26c138d83e23e90ceda52e0deaad359'
                            variable: 'c30a451d2f201300a09a839fb18c95b4'
                        }
                    },
                    {
                        table: 'sys_hub_flow_stage'
                        id: '57e4c81d83c97650ceda52e0deaad3c9'
                        key: {
                            flow: '83e4c81d83c97650ceda52e0deaad36a'
                            value: 'waiting_for_approval'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '696cdf4d83e23e90ceda52e0deaad3b0'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'ee4c574d83e23e90ceda52e0deaad3d4'
                            variable: '4328e2fb47222200b4fad7527c9a7164'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '6a9d5b4583263e90ceda52e0deaad325'
                        key: {
                            model: '7093c63c83a27690ceda52e0deaad392'
                            element: 'fact'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '724c974d83e23e90ceda52e0deaad311'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'ee4c574d83e23e90ceda52e0deaad3d4'
                            variable: '58715a1c53f22010d3a8ddeeff7b1248'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '764c974d83e23e90ceda52e0deaad312'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'ee4c574d83e23e90ceda52e0deaad3d4'
                            variable: 'f11ebf865f101300a09a2abd7f466652'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8066793aef9b4c259448f224aecce2f8'
                        key: {
                            document: 'sys_atf_step'
                            document_key: '2e02c9ac83edea50ceda52e0deaad310'
                            variable: '27d4e1c25320220002c6435723dc3486'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '826c138d83e23e90ceda52e0deaad381'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'c26c138d83e23e90ceda52e0deaad359'
                            variable: 'a67a8ef03b23320057a4a2e334efc472'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '826c138d83e23e90ceda52e0deaad390'
                        key: {
                            name: 'var__m_sys_hub_action_output_756c138d83e23e90ceda52e0deaad34d'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '866c138d83e23e90ceda52e0deaad391'
                        key: {
                            model: '756c138d83e23e90ceda52e0deaad34d'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '866c138d83e23e90ceda52e0deaad399'
                        key: {
                            name: 'var__m_sys_hub_action_output_756c138d83e23e90ceda52e0deaad34d'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '866c138d83e23e90ceda52e0deaad3a1'
                        key: {
                            document: 'sys_hub_action_type_snapshot'
                            document_key: '756c138d83e23e90ceda52e0deaad34d'
                            variable: '866c138d83e23e90ceda52e0deaad391'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '874c974d83e23e90ceda52e0deaad39d'
                        key: {
                            name: 'var__m_sys_hub_action_output_7093c63c83a27690ceda52e0deaad392'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '874c974d83e23e90ceda52e0deaad39f'
                        key: {
                            model: '7093c63c83a27690ceda52e0deaad392'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c502fc583663e90ceda52e0deaad371'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_ee4c574d83e23e90ceda52e0deaad3d4'
                            element: 'sn_auth_token'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '8e3488d583c97650ceda52e0deaad375'
                        key: {
                            model: 'b32484d583c97650ceda52e0deaad32b'
                            element: 'request_item'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8e6c138d83e23e90ceda52e0deaad37f'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'c26c138d83e23e90ceda52e0deaad359'
                            variable: '58715a1c53f22010d3a8ddeeff7b1248'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8e6c138d83e23e90ceda52e0deaad3a0'
                        key: {
                            field: '__dont_treat_as_error__'
                            id: '756c138d83e23e90ceda52e0deaad34d'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93e4c81d83c97650ceda52e0deaad3a9'
                        key: {
                            name: 'var__m_sys_hub_flow_input_83e4c81d83c97650ceda52e0deaad36a'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b64c974d83e23e90ceda52e0deaad311'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'ee4c574d83e23e90ceda52e0deaad3d4'
                            variable: '91e207d03b50030057a4a2e334efc4a0'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'b7558411830d7650ceda52e0deaad3e5'
                        key: {
                            id: '0945c4dd83c97650ceda52e0deaad3c8'
                            field: 'rec_price_if_checked'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8702f0983663e90ceda52e0deaad3a3'
                        key: {
                            name: 'var__m_sys_hub_step_ext_output_c26c138d83e23e90ceda52e0deaad359'
                            element: 'sn_auth_token'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ba4c974d83e23e90ceda52e0deaad312'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'ee4c574d83e23e90ceda52e0deaad3d4'
                            variable: '7a59009bc7522010820469467ec260c0'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ba9d5b4583263e90ceda52e0deaad367'
                        key: {
                            field: 'fact'
                            id: '7093c63c83a27690ceda52e0deaad392'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'be4c974d83e23e90ceda52e0deaad31a'
                        key: {
                            model: '7093c63c83a27690ceda52e0deaad392'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'c235cc9d83c97650ceda52e0deaad3e5'
                        key: {
                            id: '8315049d83c97650ceda52e0deaad3e0'
                            field: 'recurring_price'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c26c138d83e23e90ceda52e0deaad380'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'c26c138d83e23e90ceda52e0deaad359'
                            variable: '91e207d03b50030057a4a2e334efc4a0'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c26c138d83e23e90ceda52e0deaad3a1'
                        key: {
                            field: '__action_status__'
                            id: '756c138d83e23e90ceda52e0deaad34d'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c34c974d83e23e90ceda52e0deaad3e3'
                        key: {
                            document: 'sys_hub_action_type_definition'
                            document_key: '7093c63c83a27690ceda52e0deaad392'
                            variable: '874c974d83e23e90ceda52e0deaad39f'
                        }
                    },
                    {
                        table: 'sys_hub_flow_stage'
                        id: 'c464401983c97650ceda52e0deaad3cf'
                        key: {
                            flow: 'b32484d583c97650ceda52e0deaad32b'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c66c138d83e23e90ceda52e0deaad381'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'c26c138d83e23e90ceda52e0deaad359'
                            variable: 'f11ebf865f101300a09a2abd7f466652'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'ca6c138d83e23e90ceda52e0deaad3a1'
                        key: {
                            document: 'sys_hub_action_type_snapshot'
                            document_key: '756c138d83e23e90ceda52e0deaad34d'
                            variable: '0a6c138d83e23e90ceda52e0deaad389'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cb4c974d83e23e90ceda52e0deaad3e2'
                        key: {
                            field: '__dont_treat_as_error__'
                            id: '7093c63c83a27690ceda52e0deaad392'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd3e4c81d83c97650ceda52e0deaad3b4'
                        key: {
                            name: 'var__m_sys_hub_flow_input_83e4c81d83c97650ceda52e0deaad36a'
                            element: 'request_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_stage'
                        id: 'dfe4c81d83c97650ceda52e0deaad3c8'
                        key: {
                            flow: '83e4c81d83c97650ceda52e0deaad36a'
                            value: 'complete'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea34c8d583c97650ceda52e0deaad3b3'
                        key: {
                            name: 'var__m_sys_hub_flow_input_b32484d583c97650ceda52e0deaad32b'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'fa4c974d83e23e90ceda52e0deaad311'
                        key: {
                            document: 'sys_hub_step_instance'
                            document_key: 'ee4c574d83e23e90ceda52e0deaad3d4'
                            variable: 'c30a451d2f201300a09a839fb18c95b4'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'fbad938583263e90ceda52e0deaad3c0'
                        key: {
                            model: '756c138d83e23e90ceda52e0deaad34d'
                            element: 'fact'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fbad938583263e90ceda52e0deaad3d3'
                        key: {
                            name: 'var__m_sys_hub_action_output_756c138d83e23e90ceda52e0deaad34d'
                            element: 'fact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fbad938583263e90ceda52e0deaad3f3'
                        key: {
                            field: 'fact'
                            id: '756c138d83e23e90ceda52e0deaad34d'
                        }
                    },
                    {
                        table: 'fx_price'
                        id: 'ff558411830d7650ceda52e0deaad3e5'
                        key: {
                            id: '0945c4dd83c97650ceda52e0deaad3c8'
                            field: 'price_if_checked'
                        }
                    },
                ]
                deleted: {
                    sys_variable_value: [
                        'c6230ccec7f74b3588cadf9b0511d15c',
                        'dc27106c50ba4cbd83238a0dad2e9030',
                        '6e2767d761e640c08f6f0864e34d98fc',
                        'e1d7ec57b29b4c5784407628ff6d7761',
                    ]
                }
            }
        }
    }
}
