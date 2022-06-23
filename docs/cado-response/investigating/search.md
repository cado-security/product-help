---
title: Advanced Search
hide_title: true
sidebar_position: 4
---

# Advanced Timeline Search
As of Release 1.2.0, the Cado Response platform includes a new advanced search interface which supports complex queries.

### Basic Searches

#### Plain search terms
Providing plain search term will search across all fields, for example: `foo`

You can quote terms containing spaces: `"foo bar"`

#### Fields
You can search a specific field by prepending it to the search term: `user: Chris` OR  `extra: "foo bar"`

#### Ranges
You can restrict a field to a range of values: `file_size: [1024 TO 8196]`

### Building complex queries
You can build complex queries using `AND`, `OR` and `NOT` to combine terms, and brackets to group `()`:

For example: `alarm_severity: [0 TO 5] AND (user: "Chris" OR user: "James") AND NOT filename: "/foo/bar.txt"`

:::info
Note that without brackets, ANDs will bind before ORs. This means that `user: "Chris" AND user: "James" OR filename: "/foo/bar.txt"` is searched as `(user: "Chris" AND user: "James") OR filename: "/foo/bar.txt"`.
:::

## Fields
Searchable fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `macb` | keyword | 4 character string which encoding MACB information for this event. An `M` in position 0 indicates this is a Modified event and a `.` represents a non-modified event. e.g. `M..B` indicates modified and birth. |
| `source` | keyword | The type of the file or data that produced this event e.g. `EVT`,  `CLOUDTRAIL`, `FILE`, `JAVA_IDX`, `LOG`. |
| `sourcetype` | keyword | More specific subtype of `source` |
| `type` | keyword | `;` separated list of event types, e.g. `Last Executed Time`, `Updated Time`, `Content Modification Time`, `Creation Time`. |
| `user` | keyword | User associated with the event |
| `host` | keyword | Host name associated with the event |
| `filename` | special | The path of the file associated with this event |
| `full_filename` | keyword | The full path of the file associated with this event, supports regex and must match entire path |
| `inode` | keyword | The inode number of the file associated with this event |
| `source_hostname` | keyword | For network connections, the hostname that it originated from |
| `destination_hostname` | keyword | For network connections, the destination hostname |
| `tag` | keyword | Tag representing type of event e.g. `Network Logon`, `File Access`, `Execution` |
| `executed_process` | keyword | Where we detect a process execution, the path of the executed file |
| `short` | text | Short text providing additional data from raw event |
| `extra` | text | Longer text, providing more raw data than `short` |
| `alarm_severity` | int | Severity of event based on detections. Malicious `1`, Suspcious `3`, Other `10` |
| `isFolder` | boolean | Whether an event is a folder. |
| `evidence_id` | int | ID of evidence item |
| `timestamp` | int | Unix timestamp of event |
| `evidence_id` | int | the id of a specific evidence to search within |
| `file_size` | int | size of file associated with this event |
| `sha256` | text | sha256 of the file associated with this event |
| `strings` | text | Strings extracted from file associated with this event |
| `is_starred` | bool | Whether an event is starred |
| `for_report` | bool | Whether an event is included in the report |
| `alarm_description` | keyword | Short description explaining the reason for an alarm |
| `alarm_attack` | keyword | Mitre attack code |
| `attribute_name` | keyword | $STANDARD_INFORMATION / $FILENAME / null


Fields of type `int` or `keyword` require the search term to match exactly in order to return a result. For example, for an event with `user` equal to `chris`, the search term:
 - `user: chris` matches
 - `user: ch*` matches
 - `user: ch` does not match

Fields of type `keyword` support wildcard characters. Use `?` as a single-character wildcard and `*` for any number of characters.

Fields of type `text` do not require a full match. E.g. searching for `strings: content` will return the event with the following strings data: `This is some example content`.