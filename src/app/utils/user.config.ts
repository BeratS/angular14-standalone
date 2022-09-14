/**
 * Authorization ROLES ----------------------
 */
 enum Roles {
    ADMINISTRATOR = 'administrator',
    MONITORING = 'monitoring',
    USER = 'user',
}

enum Subjects {
    REPORTS = "reports",
    SETTINGS = "settings",
    SYSTEM_LOGS = 'system_logs'
}

// Ability all actions
enum AbilityAction {
    CREATE = 'create',
    READ = 'read',
    UPDATE = 'update',
    DELETE = 'delete',
    ACCEPT = 'accept'
}

export {
    Roles,
    AbilityAction,
    Subjects
}