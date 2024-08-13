import { actionVariablesType as vars} from "./actionVariables"

export const actionTypes = [
    {
        value: "Add",
        label: "Add",
        materials: true,
        actionVars: [vars.dropwise, vars.temperature, vars.atmosphere, vars.duration, vars.repetitions],
    },
    {
        value: "Centrifuge",
        label: "Centrifuge",
        materials: true,
        actionVars: [vars.temperature, vars.duration, vars.repetitions],
    },
    {
        value: "CollectLayer",
        label: "CollectLayer",
        materials: true,
        actionVars: [vars.layer, vars.temperature, vars.duration, vars.repetitions],
    },
    {
        value: "Combination",
        label: "Combination",
        materials: false,
        actionVars: [vars.action_idx],
    },
    {
        value: "Concentration",
        label: "Concentration",
        materials: true,
        actionVars: [vars.temperature, vars.pressure, vars.duration, vars.repetitions],
    },
    {
        value: "Distill",
        label: "Distill",
        materials: true,
        actionVars: [vars.temperature, vars.pressure, vars.duration, vars.repetitions],
    },
    {
        value: "DrySolid",
        label: "DrySolid",
        materials: true,
        actionVars: [vars.duration, vars.temperature, vars.repetitions, vars.atmosphere],
    },
    {
        value: "DrySolution",
        label: "DrySolution",
        materials: true,
        actionVars: [vars.duration, vars.temperature, vars.repetitions, vars.atmosphere],

    },
    {
        value: "Extract",
        label: "Extract",
        materials: true,
        actionVars: [vars.duration, vars.temperature, vars.repetitions],
    },
    {
        value: "Filter",
        label: "Filter",
        materials: true,
        actionVars: [vars.phase_to_keep, vars.duration, vars.temperature],
    },
    {
        value: "MakeSolution",
        label: "MakeSolution",
        materials: true,
        actionVars: [vars.proportion, vars.duration, vars.temperature],
    },
    {
        value: "Partition",
        label: "Partition",
        materials: true,
        actionVars: [vars.duration, vars.temperature],
    },
    {
        value: "PH",
        label: "PH",
        materials: true,
        actionVars: [vars.pH, vars.dropwise, vars.temperature, vars.duration],
    },
    {
        value: "PhaseSeparation",
        label: "PhaseSeparation",
        materials: true,
        actionVars: [vars.duration, vars.temperature, vars.repetitions],
    },
    {
        value: "Purify",
        label: "Purify",
        materials: false,
        actionVars: [vars.duration, vars.temperature, vars.repetitions],
    },
    {
        value: "Quench",
        label: "Quench",
        materials: true,
        actionVars: [vars.dropwise, vars.duration, vars.temperature, vars.repetitions],
    },
    {
        value: "Recrystallize",
        label: "Recrystallize",
        materials: true,
        actionVars: [vars.duration, vars.temperature, vars.repetitions],
    },
    
    {
        value: "Reflux",
        label: "Reflux",
        materials: false,
        actionVars: [vars.duration, vars.temperature, vars.repetitions, vars.atmosphere],
    },
    {
        value: "SetTemperature",
        label: "SetTemperature",
        materials: false,
        actionVars: [vars.duration, vars.temperature],
    },
    {
        value: "Stir",
        label: "Stir",
        materials: false,
        actionVars: [vars.duration, vars.temperature, vars.atmosphere],
    },
    {
        value: "Wait",
        label: "Wait",
        materials: false,
        actionVars: [vars.duration, vars.temperature],
    },
    {
        value: "Wash",
        label: "Wash",
        materials: true,
        actionVars: [vars.duration, vars.temperature, vars.repetitions],
    },
    {
        value: "Yield",
        label: "Yield",
        materials: true,
        actionVars: [],
    },
    {
        value: "Others",
        label: "Others",
        materials: false,
        actionVars: [vars.text, vars.explanation],
    },
    ]
